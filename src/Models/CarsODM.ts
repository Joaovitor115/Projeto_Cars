import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },

    });
    this.model = models.Cars || model('Cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    if (!car.status) {
      return this.model.create({ ...car, status: false });
    }
    return this.model.create({ ...car });
  }
}