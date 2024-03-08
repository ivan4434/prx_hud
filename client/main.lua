ESX = exports['es_extended']:getSharedObject()

local hudInfo = {
  isCar = false,
  isTalking = false,
  radioTalking = false,
  bars = {
    health = 0,
    armor = 0,
    hunger = 0,
    thrist = 0,
    stress = 0,
    stamina = 0,
    oxygen = 100,
    voice = 0,
    radio = 0
  }
}

local carInfo = {
  belt = false,
  cruiser = false,
  moto = false,
  emer = false,
  street = "",
  speed = 0,
  gear = 0,
  bars = {
    fuel = 0,
    engine = 0,
    rpm = 0,
  }
}

local actualCar


CreateThread(function()
  TriggerEvent('pma-voice:setTalkingMode', 2)
  while true do
    Wait(400)
    hudInfo.isTalking = NetworkIsPlayerTalking(PlayerId())
    if exports["rp-radio"].IsRadioOn() then
      hudInfo.bars.radio = 100
    else
      hudInfo.bars.radio = 0
    end
    SendNUIMessage({hudInfo = hudInfo})
  end
end)

AddEventHandler('pma-voice:setTalkingMode', function(voiceMode)
  if voiceMode == 2 then
    hudInfo.bars.voice = 45
  elseif voiceMode == 1 then
    hudInfo.bars.voice = 20
  else
    hudInfo.bars.voice = 100
  end
end)

AddEventHandler('pma-voice:radioActive', function(broadCasting)
  hudInfo.radioTalking = broadCasting
end)


CreateThread(function()
  while true do 
    Wait(2000)
    local plyPed = PlayerPedId()

    TriggerEvent('esx_status:getStatus', 'thirst', function(status)
      hudInfo.bars.thrist = status.getPercent()
    end)
    TriggerEvent('esx_status:getStatus', 'hunger', function(status)
      hudInfo.bars.hunger = status.getPercent()
    end)
    TriggerEvent('esx_status:getStatus', 'stress', function(status)
      hudInfo.bars.stress = status.getPercent()
    end)

    hudInfo.bars.armor = GetPedArmour(plyPed)

    hudInfo.bars.health = (GetEntityHealth(plyPed) - 100)

    hudInfo.bars.stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId())

    hudInfo.bars.oxygen = math.ceil(GetPlayerUnderwaterTimeRemaining(PlayerId())) * 10

    hudInfo.isCar = IsPedInAnyVehicle(plyPed, false)

    if hudInfo.isCar then
      hudInfo.left = GetMinimapAnchor().width + GetMinimapAnchor().left_x + 10
    end

    actualCar = GetVehiclePedIsIn(plyPed, false)

    SendNUIMessage({hudInfo = hudInfo})
  end
end)

-- CAR HUD --

CreateThread(function()
  local ms
  while true do 
    ms = 2000

    if carInfo.belt and actualCar == 0 then
      carInfo.belt = false
    end

    if hudInfo.isCar and actualCar ~= 0 then
      ms = 100
      DisplayRadar(true)
      carInfo.emer = IsVehicleSirenOn(actualCar)

      carInfo.speed = math.floor(GetEntitySpeed(actualCar)*3.6)

      carInfo.gear = GetVehicleCurrentGear(actualCar)

      carInfo.bars.fuel = GetVehicleFuelLevel(actualCar)* 60 / 100
      
      carInfo.bars.engine = GetVehicleEngineHealth(actualCar)

      carInfo.bars.rpm = GetVehicleCurrentRpm(actualCar)

      if GetVehicleClass(actualCar) == 8 or GetVehicleClass(actualCar)==13 then 
        carInfo.belt = false
        carInfo.moto = true
      else
        carInfo.moto = false
      end

      SendNUIMessage({carInfo = carInfo})
    end

    if not hudInfo.isCar then
      DisplayRadar(false)
    end

    Wait(ms)
  end
end)

CreateThread(function()
  while true do 
    if hudInfo.isCar and actualCar ~= 0 then
      Wait(5000)
      if not carInfo.belt and not carInfo.moto then
        PlaySound("alerta", 0.5)
      end
      local coords = GetEntityCoords(PlayerPedId());
      local streetname = GetStreetNameAtCoord(coords.x, coords.y, coords.z)
      local zone = GetNameOfZone(coords.x, coords.y, coords.z);
      local zoneLabel = GetLabelText(zone);
      _street = GetStreetNameFromHashKey(streetname);
      carInfo.street = zoneLabel .. " / ".. _street.."  "
    end
    Wait(3000)
  end
end)

-- CINTURON --

RegisterKeyMapping("cinturon", "Poner / Quitar el cinturón", "KEYBOARD", "X")

RegisterCommand("cinturon", function()
  if hudInfo.isCar and not carInfo.moto then
    carInfo.belt = not carInfo.belt

    if carInfo.belt then
      PlaySound('buckle', 0.2)
      ESX.ShowNotification("Te has puesto el cinturon")
    else
      PlaySound('unbuckle', 0.2)
      ESX.ShowNotification("Te has quitado el cinturon")
    end
  elseif not carInfo.moto then
    carInfo.belt = false
  elseif carInfo.moto then
    ESX.ShowNotification("Este vehiculo no tiene cinturon")
  end
end)

-- LOGICA DEL CINTURON --
CreateThread(function()
  local ms
  while true do
    ms = 2500
    if carInfo.belt then
      ms = 1
      DisableControlAction(0, 75, true)
			DisableControlAction(27, 75, true)
    end
    Wait(ms)
  end
end)

CreateThread(function()
  while true do 
    ms = 2000
    if not carInfo.belt and hudInfo.isCar and not carInfo.moto then
      ms = 1000
      local velBuffer = GetEntityVelocity(actualCar)
      local prevSpeed = GetEntitySpeed(actualCar)*3.6
      local currentSpeed = GetEntitySpeed(actualCar)*3.6

      if (prevSpeed - currentSpeed) >= 120 then
        local co = GetEntityCoords(PlayerPedId())
        local fw = Fwv(PlayerPedId())
        SetEntityCoords(PlayerPedId(), co.x + fw.x, co.y + fw.y, co.z - 0.47, true, true, true)
        SetEntityVelocity(PlayerPedId(), velBuffer.x, velBuffer.y, velBuffer.z)
        SetPedToRagdoll(PlayerPedId(), 1000, 1000, 0, 0, 0, 0)
      end

    end
    Wait(ms)
  end
end)

function Fwv(entity)
  local hr = GetEntityHeading(entity) + 90.0
  if hr < 0.0 then hr = 360.0 + hr end
  hr = hr * 0.0174533
  return { x = math.cos(hr) * 2.0, y = math.sin(hr) * 2.0 }
end

RegisterKeyMapping('limitador', 'Poner/Quitar el limitador de velocidad', 'keyboard', '')

RegisterCommand('limitador', function()
  if hudInfo.isCar then
    if carInfo.cruiser == false then
      local player = PlayerPedId()
      local vehicle = GetVehiclePedIsIn(player, false)
      local speed = GetEntitySpeed(vehicle)
      carInfo.cruiser = true
      SetEntityMaxSpeed(vehicle, speed)
    else
      carInfo.cruiser = false
      local player = PlayerPedId()
      local vehicle = GetVehiclePedIsIn(player, false)
      local maxSpeed = GetVehicleHandlingFloat(vehicle,"CHandlingData","fInitialDriveMaxFlatVel")
      SetEntityMaxSpeed(vehicle, maxSpeed)
    end
  end
end)

function PlaySound(soundFile, soundVolume)
  SendNUIMessage({
    transactionType = 'playSound',
    transactionFile = soundFile,
    transactionVolume = soundVolume
  })
end

--[[ANCLA]]
local EstadoAncla = false

CreateThread(function()
  local ms
  while true do
    ms = 2000
    local playerPed = PlayerPedId()
    if EstadoAncla and IsPedInAnyBoat(playerPed) then
      ms = 1
      SetVehicleEngineOn(GetVehiclePedIsIn(playerPed, false), false, false, true)
      FreezeEntityPosition(GetVehiclePedIsIn(playerPed, false), true)		
    end
    if IsPedInAnyBoat(playerPed) and not EstadoAncla then SetVehicleEngineOn(GetVehiclePedIsIn(playerPed, false), true, false, true) FreezeEntityPosition(GetVehiclePedIsIn(playerPed, false), false) end
    if not IsPedInAnyBoat(playerPed) then EstadoAncla = false end
    Wait(ms)
  end
end)

RegisterCommand('ancla', function()
  local myVehicleSpeed = GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false))
  if (myVehicleSpeed * 3.6) > 20 then
    ESX.ShowNotification("Vas muy rápido, no puedes anclar el barco")
  elseif not EstadoAncla then
    ESX.ShowNotification("Has echado el ancla")
    EstadoAncla = true
  elseif EstadoAncla then
    ESX.ShowNotification("Has retirado el ancla")
    EstadoAncla = false
  end
end)

local showHud = true

RegisterCommand("hud", function()
  showHud = not showHud
  SendNUIMessage({
    showHud = showHud
  })
end)