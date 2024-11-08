main = "mammozkw3xLY" -- Target account name
-- Used for alt account
-- Trade script execution
getgenv().loop = true

local PlaceID = game.PlaceId
local AllIDs = {}
local foundAnything = ""
local actualHour = os.date("!*t").hour
local Deleted = false

function TPReturner()
    local Site;
    if foundAnything == "" then
        Site = game.HttpService:JSONDecode(game:HttpGet('https://games.roblox.com/v1/games/' .. PlaceID .. '/servers/Public?sortOrder=Asc&limit=100'))
    else
        Site = game.HttpService:JSONDecode(game:HttpGet('https://games.roblox.com/v1/games/' .. PlaceID .. '/servers/Public?sortOrder=Asc&limit=100&cursor=' .. foundAnything))
    end
    local ID = ""
    if Site.nextPageCursor and Site.nextPageCursor ~= "null" and Site.nextPageCursor ~= nil then
        foundAnything = Site.nextPageCursor
    end
    local num = 0;
    for i,v in pairs(Site.data) do
        local Possible = true
        ID = tostring(v.id)
        if tonumber(v.maxPlayers) > tonumber(v.playing) then
            for _,Existing in pairs(AllIDs) do
                if num ~= 0 then
                    if ID == tostring(Existing) then
                        Possible = false
                    end
                else
                    if tonumber(actualHour) ~= tonumber(Existing) then
                        local delFile = pcall(function()
                            AllIDs = {}
                            table.insert(AllIDs, actualHour)
                        end)
                    end
                end
                num = num + 1
            end
            if Possible == true then
                table.insert(AllIDs, ID)
                wait()
                pcall(function()
                    wait()
                    game:GetService("TeleportService"):TeleportToPlaceInstance(PlaceID, ID, game.Players.LocalPlayer)
                end)
                wait(4)
            end
        end
    end
end

function Teleport()
    while wait() do
        pcall(function()
            TPReturner()
            if foundAnything ~= "" then
                TPReturner()
            end
        end)
    end
end

-- Trade offer function
function Trade_FK()
    for i, v in pairs(game.Players.LocalPlayer.Backpack:GetChildren()) do 
        if v:FindFirstChild("offer") then
            print("Offer item found: " .. v.Name)
            -- Equip the item
            game.Players.LocalPlayer.Character.Humanoid:EquipTool(v)
            wait(0.01)  -- Set item equip time to 0.01 seconds
            -- Send the trade offer
            local target = game:GetService("Workspace")[main]
            if target and target:FindFirstChild("TradeOffer") then
                print("Sending trade offer to: " .. target.Name)
                fireproximityprompt(target.TradeOffer)  -- Immediately send the trade offer
            else
                print("Trade offer not found for: " .. main)
            end
        end
    end
end

local virtualInputManager = game:GetService('VirtualInputManager')
local GuiService = game:GetService("GuiService")

repeat task.wait() until game:IsLoaded()
spawn(function()

    wait(20)
    -- local loadmammoz = game.Players.LocalPlayer.PlayerGui.loading.loading.skip.Visible
    -- print(loadmammoz)
    -- while true do wait(30)
    --     if loadmammoz == false then
    wait(5)
    virtualInputManager:SendMouseButtonEvent(0, 0, 0, true, game, 1)
    virtualInputManager:SendMouseButtonEvent(0, 0, 0, false, game, 1)
    wait(3)
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-980.953125, -244.911011, -2704.25342, 0.836474955, -1.40333247e-08, -0.548005104, 1.58557734e-09, 1, -2.31877912e-08, 0.548005104, 1.85271034e-08, 0.836474955)
    wait(10)

    if game.Players.LocalPlayer.Name == main then
        spawn(function()
            task.wait(60*4+30)
            game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, game.JobId, game.Players.LocalPlayer)
            -- game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, game.Players.LocalPlayer['main'])
        end)
        while true do
            local button = game.Players.LocalPlayer.PlayerGui:FindFirstChild("hud")
                and game.Players.LocalPlayer.PlayerGui.hud:FindFirstChild("safezone")
                and game.Players.LocalPlayer.PlayerGui.hud.safezone:FindFirstChild("bodyannouncements")
                and game.Players.LocalPlayer.PlayerGui.hud.safezone.bodyannouncements.offer:FindFirstChild("confirm")

            if button then
                print("Button found:", button)
                firesignal(game.Players.LocalPlayer.PlayerGui.hud.safezone.bodyannouncements.offer.confirm["MouseButton1Click"])
                wait(0.1)
            end
        end
    else
        spawn(function()
            task.wait(60*4-100)
            -- Teleport()
            game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, game.JobId, game.Players.LocalPlayer)
        end)
        while true do
            if game.Players:FindFirstChild(main) then
                print("Target account found: " .. main)
                Trade_FK()
                break
            else
                print("Target account not found: " .. main)
            end
        end
    end
    --         break
    --     end
    -- end

    
end)