class Emitter {
    constructor() { this.events = {}; }
    on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); }