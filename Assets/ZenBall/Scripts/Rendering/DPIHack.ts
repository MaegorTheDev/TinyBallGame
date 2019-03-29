(function HDPI_Hacks_By_abeisgreat() {
    
    const w = (window as any);

    const initialize_hack = () => {
        //console.log("Initializing HDPI hacks v7 by @abeisgreat");
        const fakeMouseEventFn = (ev) => {
            const ut_HTML = w.ut._HTML;
            const fakeEvent = {
                type: ev.type,
                pageX: ev.pageX * window.devicePixelRatio,
                pageY: ev.pageY * window.devicePixelRatio,
                preventDefault: () => {},
                stopPropagation: () => {}
            };
            ut_HTML.mouseEventFn(fakeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        };

        const fakeTouchEventFn = (ev) => {
            const ut_HTML = w.ut._HTML;
            const changedTouches = [];
            for (var index = 0; index < ev.changedTouches.length; index++) {
                const touch = ev.changedTouches[index];
                changedTouches.push({
                    identifier: touch.identifier,
                    pageX: touch.pageX * window.devicePixelRatio,
                    pageY: touch.pageY * window.devicePixelRatio
                });
            }
            const fakeEvent = {
                type: ev.type,
                changedTouches,
                preventDefault: () => {},
                stopPropagation: () => {}
            };
            ut_HTML.touchEventFn(fakeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        };

        window.addEventListener("resize", function () {
            const ut = w.ut;

            ut._HTML.onDisplayUpdated(
                window.innerWidth * window.devicePixelRatio,
                window.innerHeight * window.devicePixelRatio,
                window.screen.width * window.devicePixelRatio,
                window.screen.height * window.devicePixelRatio,
                -1);

            ut._HTML.canvasElement.style.width = `${window.innerWidth}px`;
            ut._HTML.canvasElement.style.height = `${window.innerHeight}px`;

            ut._HTML.stopResizeListening();
            const mouseEvents = ["down", "move", "up"];
            const touchEvents = ["touch", "cancel", "move", "start", "end"];

            mouseEvents.forEach((type) => {
                const eventType = `mouse${type}`;
                ut._HTML.canvasElement.removeEventListener(eventType, fakeMouseEventFn);
                ut._HTML.canvasElement.addEventListener(eventType, fakeMouseEventFn);
            });

            touchEvents.forEach((type) => {
                const eventType = `touch${type}`;
                ut._HTML.canvasElement.removeEventListener(eventType, fakeTouchEventFn);
                ut._HTML.canvasElement.addEventListener(eventType, fakeTouchEventFn);
            });

            setTimeout(function () {
                mouseEvents.forEach((type) => {
                    ut._HTML.canvasElement.removeEventListener(`mouse${type}`, ut._HTML.mouseEventFn);
                });

                touchEvents.forEach((type) => {
                    ut._HTML.canvasElement.removeEventListener(`touch${type}`, ut._HTML.touchEventFn);
                });
            }, 100);
        });
        window.dispatchEvent(new Event("resize"));
    }

    const intervalID = setInterval(() => {
        const w = (window as any);
        const ut = w.ut;
        if (ut._HTML.canvasElement && w.known_ut_HTML !== ut._HTML) {
            w.known_ut_HTML = ut._HTML;
            clearInterval(intervalID);
            initialize_hack();
        }
    }, 10);
})();
namespace casualgf {

    /** New System */
    export class DPIHack extends ut.ComponentSystem {
        
        OnUpdate():void {

        }
    }
}
