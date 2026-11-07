// Section 07 — `this`

// Bind add in the constructor so it keeps this PlannerList instance
// even when the method is passed around as a callback.
export class PlannerList {
  constructor(owner) {
    this.owner = owner;
    this.ids = [];
    this.add = this.add.bind(this);
  }

  add(id) {
    this.ids.push(id);
  }

  describe() {
    return `${this.owner} has ${this.ids.length} course(s) planned`;
  }
}
