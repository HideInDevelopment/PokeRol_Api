class Type {
  constructor({ id, name, effective = [], ineffective = [], noEffect = [] }) {
    this.id = id;
    this.name = name;
    this.effective = effective;
    this.ineffective = ineffective;
    this.noEffect = noEffect;
  }
}
