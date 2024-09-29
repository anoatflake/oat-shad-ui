export type TuplifyUnion<U extends string, R extends any[] = []> = {
  [S in U]: Exclude<U, S> extends never // for each variant in the union // remove it and..
    ? [...R, S] // ..stop recursion if it was the last variant
    : TuplifyUnion<Exclude<U, S>, [...R, S]>; // ..recur if not
}[U]; // extract all values from the object
