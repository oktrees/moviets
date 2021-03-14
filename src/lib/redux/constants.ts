interface CreateRequestTypes {
  [key: string]: string;
}

export function createRequestTypes(base: string): CreateRequestTypes {
  return ["REQUEST", "SUCCESS", "FAILURE"].reduce(
    (acc: CreateRequestTypes, type: string) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
}