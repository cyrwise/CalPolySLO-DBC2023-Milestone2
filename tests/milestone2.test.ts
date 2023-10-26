import { describe, expect, test } from "@jest/globals";
import {
  copyVolunteer,
  daBigTest,
  findAverage,
  findCAOverN,
  findIndexAns,
  findSBStaff,
  getVolunteerInfo,
  updateVolunteer,
} from "../milestone2";
import { volunteers, volunteers2 } from "./data";
import {
  q3allAges,
  q3allAges2,
  q3Over30,
  q6update1,
  q6update2,
  q8answer1,
  q8answer2,
} from "./solutions";

const testData = [volunteers, volunteers2];

test("Question 1: Lambda Functions", () => {
  expect(findAverage(volunteers)).toBeCloseTo(38, 0.01);
  expect(findAverage(volunteers2)).toBeCloseTo(45.125, 0.01);
});

test("Question 2: Data Handling", () => {
  expect(findIndexAns(volunteers)).toBe(4);
  expect(findIndexAns(volunteers2)).toBe(-1);
});

test("Question 3: Filtering data", () => {
  // Without age filter
  expect(findCAOverN(volunteers, 0)).toEqual(q3allAges);
  expect(findCAOverN(volunteers2, 0)).toEqual(q3allAges2);
  // With age filter
  expect(findCAOverN(volunteers, 30)).toEqual(q3Over30);
  expect(findCAOverN(volunteers2, 75)).toEqual([]);
});

test("Question 4: Searching Data", () => {
  expect(findSBStaff(volunteers)).toEqual(volunteers[2]);
  expect(findSBStaff(volunteers2)).toEqual(volunteers2[7]);
});

test("Question 5: Spread Operator Part 1", () => {
  const volunteer = volunteers[0];
  expect(copyVolunteer(volunteer)).toEqual(volunteer); // values should match
  expect(copyVolunteer(volunteer)).not.toBe(volunteer); // but pointers should not (must be a copy)
});

test("Question 6: Spread Operator Part 2", () => {
  const volunteer = volunteers[0];
  const update1 = { email: "dboyle@gmail.com" };
  const update2 = { state: "WA", city: "Seattle" };
  expect(updateVolunteer(volunteer, update1)).toEqual(q6update1);
  expect(updateVolunteer(volunteer, update2)).toEqual(q6update2);
});

test("Question 7: Object Destructuring", () => {
  const volunteer = volunteers[0];
  const volunteer2 = volunteers2[0];
  expect(getVolunteerInfo(volunteer)).toEqual(
    "Dino is 27 years old and lives in SLO"
  );
  expect(getVolunteerInfo(volunteer2)).toEqual(
    "Ali is 15 years old and lives in Denver"
  );
});

test("Question 8: Putting it All Together!", () => {
  expect(daBigTest(volunteers)).toEqual(q8answer1);
  expect(daBigTest(volunteers2)).toEqual(q8answer2);
  expect(daBigTest([])).toBeUndefined();
});
