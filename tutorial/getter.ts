export class Contact {

  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
