// ============================================================
// TYPESCRIPT FUNDAMENTALS - Learning Examples
// ============================================================

console.log("=== TypeScript Fundamentals Learning ===\n");

// ============================================================
// 1. BASIC TYPES
// ============================================================
console.log("--- 1. Basic Types ---");

// String
const userName: string = "John Doe";

// Number (integers and floats are both 'number')
const age: number = 30;
const price: number = 19.99;

// Boolean
const isActive: boolean = true;

// Array (two syntaxes)
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: Array<string> = ["apple", "banana", "orange"];

// Tuple (fixed-length array with specific types)
const person: [string, number] = ["Alice", 25];

console.log(`User: ${userName}, Age: ${age}, Active: ${isActive}`);
console.log(`Numbers: ${numbers}, Fruits: ${fruits}`);
console.log(`Person tuple: ${person[0]} is ${person[1]} years old\n`);

// ============================================================
// 2. ANY, UNKNOWN, AND NEVER
// ============================================================
console.log("--- 2. Any, Unknown, and Never ---");

// Any - disables type checking (use sparingly!)
let randomValue: any = 10;
randomValue = "now I'm a string";
randomValue = true;

// Unknown - safer than 'any', requires type checking
let userInput: unknown = "hello";
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Type check required
}

// Never - represents values that never occur (infinite loops, errors)
function throwError(message: string): never {
  throw new Error(message);
}

console.log(`Random value: ${randomValue}\n`);

// ============================================================
// 3. FUNCTIONS
// ============================================================
console.log("--- 3. Functions ---");

// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters (use ?)
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// Default parameters
function calculateDiscount(price: number, discount: number = 0.1): number {
  return price * (1 - discount);
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Void return type (no return value)
function logMessage(message: string): void {
  console.log(message);
}

console.log(`Add: ${add(5, 3)}`);
console.log(`Greet: ${greet("Alice")}`);
console.log(`Discount: $${calculateDiscount(100, 0.2)}`);
console.log(`Multiply: ${multiply(4, 7)}\n`);

// ============================================================
// 4. INTERFACES
// ============================================================
console.log("--- 4. Interfaces ---");

// Interface defines the shape of an object
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Readonly property
}

const newUser: User = {
  id: 1,
  name: "Bob Smith",
  email: "bob@example.com",
  createdAt: new Date(),
};

// Interface with methods
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(`User: ${newUser.name}, Email: ${newUser.email}`);
console.log(`Calculator: 10 + 5 = ${calc.add(10, 5)}\n`);

// ============================================================
// 5. TYPE ALIASES
// ============================================================
console.log("--- 5. Type Aliases ---");

// Type alias for primitive types
type ID = string | number; // Union type

// Type alias for objects
type Product = {
  id: ID;
  name: string;
  price: number;
  inStock: boolean;
};

const laptop: Product = {
  id: "PROD-001",
  name: "Laptop",
  price: 999.99,
  inStock: true,
};

// Type alias for function
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => a / b;

console.log(`Product: ${laptop.name}, Price: $${laptop.price}`);
console.log(`Divide: 20 / 4 = ${divide(20, 4)}\n`);

// ============================================================
// 6. UNION AND INTERSECTION TYPES
// ============================================================
console.log("--- 6. Union and Intersection Types ---");

// Union type (OR)
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";

function processStatus(status: Status): void {
  console.log(`Processing status: ${status}`);
}

processStatus(orderStatus);

// Intersection type (AND)
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

const employee: Person = {
  name: "Emma",
  age: 28,
};

console.log(`Employee: ${employee.name}, Age: ${employee.age}\n`);

// ============================================================
// 7. CLASSES
// ============================================================
console.log("--- 7. Classes ---");

class Animal {
  // Public by default
  public name: string;

  // Private (only accessible within class)
  private age: number;

  // Protected (accessible in class and subclasses)
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getInfo(): string {
    return `${this.name} is a ${this.age}-year-old ${this.species}`;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age, "Dog");
    this.breed = breed;
  }

  public bark(): void {
    console.log(`${this.name} says: Woof!`);
  }

  public getBreedInfo(): string {
    return `${this.name} is a ${this.breed} (${this.species})`;
  }
}

const myDog = new Dog("Max", 3, "Golden Retriever");
console.log(myDog.getInfo());
console.log(myDog.getBreedInfo());
myDog.bark();
console.log();

// ============================================================
// 8. GENERICS
// ============================================================
console.log("--- 8. Generics ---");

// Generic function - works with any type
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["a", "b", "c"]);

console.log(`First number: ${firstNumber}`);
console.log(`First string: ${firstString}`);

// Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello" };

console.log(`Number box: ${numberBox.value}`);
console.log(`String box: ${stringBox.value}\n`);

// ============================================================
// 9. ENUMS
// ============================================================
console.log("--- 9. Enums ---");

// Numeric enum (default starts at 0)
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// String enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let playerDirection: Direction = Direction.Up;
let favoriteColor: Color = Color.Blue;

console.log(`Direction: ${Direction.Up} (${playerDirection})`);
console.log(`Color: ${favoriteColor}\n`);

// ============================================================
// 10. TYPE ASSERTIONS
// ============================================================
console.log("--- 10. Type Assertions ---");

// Type assertion - telling TypeScript you know better
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Alternative syntax (not in JSX)
let strLength2: number = (<string>someValue).length;

console.log(`String length: ${strLength}\n`);

// ============================================================
// 11. LITERAL TYPES
// ============================================================
console.log("--- 11. Literal Types ---");

// Specific literal values as types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function makeRequest(method: HttpMethod, url: string): void {
  console.log(`Making ${method} request to ${url}`);
}

makeRequest("GET", "/api/users");

let roll: DiceRoll = 6;
console.log(`Dice roll: ${roll}\n`);

// ============================================================
// 12. TYPE GUARDS
// ============================================================
console.log("--- 12. Type Guards ---");

// typeof type guard
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String: ${value.toUpperCase()}`);
  } else {
    console.log(`Number: ${value.toFixed(2)}`);
  }
}

printValue("hello");
printValue(42.567);

// instanceof type guard
class Car {
  drive() {
    return "Driving a car";
  }
}

class Bike {
  ride() {
    return "Riding a bike";
  }
}

function useVehicle(vehicle: Car | Bike): void {
  if (vehicle instanceof Car) {
    console.log(vehicle.drive());
  } else {
    console.log(vehicle.ride());
  }
}

useVehicle(new Car());
useVehicle(new Bike());
console.log();

// ============================================================
// 13. READONLY AND CONST
// ============================================================
console.log("--- 13. Readonly and Const ---");

// Readonly properties
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// config.apiUrl = "new url"; // Error: Cannot assign to readonly property

// Readonly array
const readonlyNumbers: ReadonlyArray<number> = [1, 2, 3];
// readonlyNumbers.push(4); // Error: push doesn't exist on readonly array

console.log(`Config URL: ${config.apiUrl}`);
console.log(`Readonly numbers: ${readonlyNumbers}\n`);

// ============================================================
// 14. UTILITY TYPES
// ============================================================
console.log("--- 14. Utility Types ---");

interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

// Partial - makes all properties optional
type PartialTask = Partial<Task>;
const taskUpdate: PartialTask = { completed: true };

// Required - makes all properties required
type RequiredTask = Required<Task>;

// Readonly - makes all properties readonly
type ReadonlyTask = Readonly<Task>;

// Pick - picks specific properties
type TaskPreview = Pick<Task, "id" | "title">;
const preview: TaskPreview = { id: 1, title: "Learn TypeScript" };

// Omit - omits specific properties
type TaskWithoutId = Omit<Task, "id">;

console.log(`Task preview: ${preview.title}`);
console.log(`Partial update: completed = ${taskUpdate.completed}\n`);

// ============================================================
// SUMMARY
// ============================================================
console.log("=== Summary ===");
console.log("You've learned:");
console.log("1. Basic types (string, number, boolean, arrays, tuples)");
console.log("2. Any, unknown, and never types");
console.log("3. Functions with type annotations");
console.log("4. Interfaces for object shapes");
console.log("5. Type aliases and union/intersection types");
console.log("6. Classes with access modifiers");
console.log("7. Generics for reusable code");
console.log("8. Enums for named constants");
console.log("9. Type assertions and type guards");
console.log("10. Utility types for type transformations");
console.log("\nKeep practicing and exploring TypeScript! 🚀");
