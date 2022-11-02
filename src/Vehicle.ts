/**
 * This class creates a vehicle
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-18
 */

class Vehicle {
  public speed: number = 0
  public maxSpeed: number
  public doorAmount: number
  public licensePlate: string
  public colour: string

  constructor(
    colour: string,
    licensePlate: string,
    doorAmount: number,
    maxSpeed: number
  ) {
    this.licensePlate = licensePlate
    this.colour = colour
    this.maxSpeed = maxSpeed
    this.doorAmount = doorAmount
  }

  // getters
  public getSpeed(): number {
    return this.speed
  }

  public getMaxSpeed(): number {
    return this.maxSpeed
  }

  public getDoorAmount(): number {
    return this.doorAmount
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  public getColour(): string {
    return this.colour
  }

  // setters
  public setLicensePlate(thePlate: string): void {
    this.licensePlate = thePlate
  }

  public setColour(theColour: string): void {
    this.colour = theColour
  }

  public accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  public break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }

  public status(): void {
    console.log(
      `        --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxSpeed}
        --> Number of doors: ${this.doorAmount}
        --> License Plate: ${this.licensePlate}
        --> Colour: ${this.colour}`
    )
  }
}

export = Vehicle
