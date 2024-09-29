class Movement {
  constructor({
    id,
    name,
    type,
    category,
    powerPoints,
    precisionPoints,
    movementPoints,
  }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.category = category;
    this.powerPoints = powerPoints;
    this.precisionPoints = precisionPoints;
    this.movementPoints = movementPoints;
  }

  useMovement() {
    if (this.movementPoints > 0) this.movementPoints--;
    else
      throw new Error(
        `${this.name} has ${this.movementPoints} and cannot be launched.`
      );
  }
}

export default Movement;
