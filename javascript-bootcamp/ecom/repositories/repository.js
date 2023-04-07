const fs = require("fs");
const crypto = require("crypto");

module.exports = class Repository {
  constructor(filename) {
    //it is not allowed to use async functions in a constructor.
    //That's why sync functions are used here.
    if (!filename) {
      throw new Error("File arg is missing");
    }

    this.filename = filename;
    try {
      //Check if this file exists
      fs.accessSync(this.filename);
    } catch (err) {
      //Create new if it doesn't exist
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async create(attrs) {
    attrs.id = this.randomId();
    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);
    return attrs;
  }

  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf-8",
      })
    );
  }

  async hashPassword(password) {
    const salt = crypto.randomBytes(8).toString("hex");
    const buf = await scrypt(password, salt, 64);
    return `${buf.toString("hex")}.${salt}`;
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Record with id ${id} not found`);
    }

    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();
    return records.find((record) =>
      Object.keys(filters).every((key) => record[key] === filters[key])
    );
  }
};
