class Stat {
  constructor({ id, name, value, buff, debuff, state }) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.buff = buff;
    this.debuff = debuff;
    this.state = state;
  }

  /**
   * A stat can have at maximun 6 points of buff or 6 points of debuff
   * So the state of the stat go between -6 and +6
   */
  applyBuffsAndDebuffs() {
    this.state = this.buff - this.debuff;
  }

  /**
   * Apply a value to the current stat buff
   * @param {number} value
   */
  applyBuff(value) {
    if (state == 6) throw new Error(`${this.name} cannot increase more.`);
    else {
      var buffsSum = this.buff + value;
      if (buffsSum > Stat.MAX_BUFF_AVAILABLE)
        this.buff = Stat.MAX_BUFF_AVAILABLE;
      else this.buff = buffsSum;

      this.applyBuffsAndDebuffs();
    }
  }

  /**
   * Apply a value to the current stat debuff
   * @param {number} value
   */
  applyDebuff(value) {
    if (state == -6) throw new Error(`${this.name} cannot decrease more.`);
    else {
      var debuffsSum = this.debuff + value;
      if (debuffsSum > Stat.MAX_DEBUFF_AVAILABLE)
        this.debuff = Stat.MAX_DEBUFF_AVAILABLE;
      else this.debuff = debuffsSum;

      this.applyBuffsAndDebuffs();
    }
  }
}

Stat.MAX_BUFF_AVAILABLE = 6;
Stat.MAX_DEBUFF_AVAILABLE = 6;
export default Stat;
