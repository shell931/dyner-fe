import { EventEmitter } from "@angular/core";

export class SharedService {

    $emitter = new EventEmitter();

    emitEvent() {
        this.$emitter.emit();
    }   

}