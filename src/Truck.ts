/*
 * This program is a truck class.
 *
 * @author  Ethan Prieur
 * @version 1.0
 * @since   2020-11-01
 */

class Truck extends Vehicle {
  private licensePlate: string

  constructor(
    colour: string,
    licensePlate: string,
    doorAmount: number,
    maxSpeed: number
  ) {
    this.licensePlate = licensePlate
    this.maxSpeed = maxSpeed
  }

  public status(): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
        --> MaxSpeed: ${super.getMaxSpeed()}
        --> License Plate: ${this.licensePlate}
        --> Color: ${super.getColor()}`
    )
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  public setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  public provideAir(airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
