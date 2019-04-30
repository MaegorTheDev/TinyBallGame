namespace casualgf {
 
    export class ProcessFBLoadBehaviourFilter extends ut.EntityFilter {
        fbload: casualgf.InitializeFBInstantComponent;
    }
 
    export class ProcessFBLoadBehaviour extends ut.ComponentBehaviour {
 
        data: ProcessFBLoadBehaviourFilter;
 
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
 
        // this method is called for each entity matching the ProcessFBLoadBehaviourFilter signature, once when enabled
        OnEntityEnable(): void {
            // this starts the fb instant service
            FBInstantService.getInstance().initialize(this.world);
          
        }
        OnEntityUpdate(){
            let playerData = this.data.fbload;
            if(playerData.Loaded && !GameSystem.loaded){
            } 
        }

    }
}