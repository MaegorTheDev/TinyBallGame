namespace game {
 
    export class ProcessFBLoadBehaviourFilter extends ut.EntityFilter {
        fbload: game.InitializeFBInstantComponent;
    }
 
    export class ProcessFBLoadBehaviour extends ut.ComponentBehaviour {
 
        data: ProcessFBLoadBehaviourFilter;
 
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
 
        // this method is called for each entity matching the ProcessFBLoadBehaviourFilter signature, once when enabled
        OnEntityEnable(): void {
            // ok, gonna do up our fb instant stuff...
            FBInstantService.getInstance().initialize(this.world);
            
            /** .then(()=>{    
                console.log("FB INSTANTESERVICE");
                let playerData = new game.InitializeFBInstantComponent;
                playerData.PlayerID =  FBInstant.player.getID();
                playerData.PlayerName = FBInstant.player.getName();               
                playerData.Image = FBInstant.player.getPhoto(); 
                //playerData.Loaded = true;
                this.world.setComponentData(this.entity, playerData);                
            });   */      
        }
        OnEntityUpdate(){
            let playerData = this.data.fbload;
            if(playerData.Loaded && !GameSystem.loaded){
                GameSystem.ShowMainScreen(this.world);               
            } 
        }

    }
}