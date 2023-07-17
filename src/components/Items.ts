export const Items = {
  APPLE: "Apfel",
  STONE: "Stein",
  SWORD: "Schwert",
  MUSHROOM: "Pilz",
} as const;

export const ItemTypes = {
  FOOD: "food",
  EQUIPMENT: "equipment",
  WEAPONS: "weapons",
  RESOURCES: "resources",
  UNKOWN: "unkown",
} as const;

export type ItemType = typeof ItemTypes[keyof typeof ItemTypes];
export type Item = typeof Items[keyof typeof Items];

export const getItemType = (item: string): ItemType => {
  switch (item) {
    case Items.APPLE:
      return ItemTypes.FOOD;
    case Items.STONE:
      return ItemTypes.RESOURCES;
    case Items.SWORD:
      return ItemTypes.WEAPONS;
    case Items.MUSHROOM:
      return ItemTypes.FOOD;
    default:
      return ItemTypes.UNKOWN;
  }
};

export const getItemDescription = (item: Item): string => {
  switch (item) {
    case Items.APPLE:
      return "Ein leckere und gesunde Frucht.";
    case Items.STONE:
      return "Ein robuster Stein, der zum Bauen verwendet werden kann.";
    case Items.SWORD:
      return "Ein scharfes Schwert für den Kampf.";
    case Items.MUSHROOM:
      return "Ein mysteriöser Pilz mit heilenden Eigenschaften.";
    default:
      return "Unbekannter Gegenstand";
  }
};

export const getItemUsage = (item: Item): string => {
  switch (item) {
    case Items.APPLE:
      return "Kann gegessen werden, um die Gesundheit wiederherzustellen.";
    case Items.STONE:
      return "Kann zum Bauen von Strukturen verwendet werden.";
    case Items.SWORD:
      return "Kann im Kampf gegen Feinde eingesetzt werden.";
    case Items.MUSHROOM:
      return "Kann zur Herstellung von Heiltränken verwendet werden.";
    default:
      return "Unbekannter Gegenstand";
  }
};
