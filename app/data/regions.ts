export const regions = [
  {
    name: "Central",
    crops: [
      {
        name: "Beetroot",
        planting: [0, 1, 2, 3], // January to April
        harvesting: [3, 4, 5, 6], // April to July
      },
      {
        name: "Broccoli",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cabbage",
        planting: [0, 1, 2, 3], // January to April
        harvesting: [3, 4, 5, 6, 7], // April to August
      },
      {
        name: "Carrot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cucumber",
        planting: [7, 8, 9, 10, 11, 0], // August to February
        harvesting: [10, 11, 0, 1, 2, 3, 4, 5], // October to June
      },
      {
        name: "Gem Squash",
        planting: [1, 2, 7, 8], // February/March & August/September
        harvesting: [4, 5, 10, 11], // May/June & November/December
      },
      {
        name: "Lettuce",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Onion",
        planting: [0, 1, 2, 3, 4], // January to May
        harvesting: [4, 5, 6, 7, 8, 9, 10, 11], // May to December
      },
      {
        name: "Pepper (Sweet)",
        planting: [7, 8, 9, 10, 11, 0], // August to February
        harvesting: [10, 11, 0, 1, 2, 3, 4, 5], // October to June
      },
      {
        name: "Potato",
        planting: [6, 11], // July & November
        harvesting: [11, 4], // November & April
      },
      {
        name: "Pumpkin",
        planting: [1, 2, 7, 8], // February/March & August/September
        harvesting: [4, 5, 10, 11], // May/June & October/November
      },
      {
        name: "Squash (Butternuts)",
        planting: [1, 2, 7, 8], // February/March & August/September
        harvesting: [4, 5, 10, 11], // May/June & October/November
      },
      {
        name: "Sweetcorn",
        planting: [1, 2, 6, 7], // February/March & July/August
        harvesting: [5, 6, 9, 10], // June/July & October/November
      },
      {
        name: "Sweet Melon",
        planting: [7, 8, 9, 10, 11, 0], // August to February
        harvesting: [10, 11, 0, 1, 2, 3, 4, 5], // October to June
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [7, 8, 9, 10, 11, 0], // August to February
        harvesting: [10, 11, 0, 1, 2, 3, 4, 5], // October to June
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [7, 8, 9, 10, 11, 0], // August to February
        harvesting: [10, 11, 0, 1, 2, 3, 4, 5], // October to June
      },
      {
        name: "Watermelons",
        planting: [1, 2, 7, 8], // February/March & August/September
        harvesting: [4, 5, 10, 11], // May/June & October/November
      },
    ],
  },
  {
    name: "Karst",
    crops: [
      {
        name: "Beetroot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8], // January to September
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // January to November
      },
      {
        name: "Broccoli",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cabbage",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // January to October
        harvesting: [3, 4, 5, 6, 7, 8, 9, 10, 11], // April to December
      },
      {
        name: "Carrot",
        planting: [1, 2, 3, 4, 5, 6], // February to July
        harvesting: [3, 4, 5, 6, 7, 8], // April to September
      },
      {
        name: "Cucumber",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Gem Squash",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Lettuce",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Onion",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pepper (Sweet)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pumpkin",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Squash (Butternuts)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweetcorn",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Melon",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Watermelons",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
    ],
  },
  {
    name: "Kavango",
    crops: [
      {
        name: "Beetroot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8], // January to September
        harvesting: [2, 3, 4, 5, 6, 7, 8, 9, 10], // March to November
      },
      {
        name: "Broccoli",
        planting: [1, 2, 3, 4, 5, 6, 7, 8, 9], // February to October
        harvesting: [4, 5, 6, 7, 8, 9, 10, 11, 0], // May to January
      },
      {
        name: "Cabbage",
        planting: [1, 2, 3, 4, 5, 6], // February to July
        harvesting: [3, 4, 5, 6, 7, 8], // April to September
      },
      {
        name: "Carrot",
        planting: [1, 2, 3, 4, 5, 6, 7, 8, 9], // February to October
        harvesting: [3, 4, 5, 6, 7, 8, 9, 10, 11, 0], // April to January
      },
      {
        name: "Cucumber",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Gem Squash",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Lettuce",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Onion",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pepper (Sweet)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pumpkin",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Squash (Butternuts)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweetcorn",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Melon",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Watermelons",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
    ],
  },
  {
    name: "North Central",
    crops: [
      {
        name: "Beetroot",
        planting: [9, 10, 11, 0, 1, 2, 3, 4], // October to May
        harvesting: [4, 5], // May/June
      },
      {
        name: "Broccoli",
        planting: [3, 4, 5], // April to June
        harvesting: [6, 7, 8], // July to September
      },
      {
        name: "Cabbage",
        planting: [3, 4, 5], // April to June
        harvesting: [6, 7, 8], // July to September
      },
      {
        name: "Carrot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cucumber",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Gem Squash",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Lettuce",
        planting: [0, 1], // January/February
        harvesting: [5], // June
      },
      {
        name: "Onion",
        planting: [6, 7], // July/August
        harvesting: [11, 0, 1], // November to January
      },
      {
        name: "Pepper (Sweet)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Potato",
        planting: [0, 1], // January/February
        harvesting: [4, 5], // May/July
      },
      {
        name: "Pumpkin",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Squash (Butternuts)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweetcorn",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Melon",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Watermelons",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
    ],
  },
  {
    name: "Orange River",
    crops: [
      {
        name: "Beetroot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8], // January to September
        harvesting: [3, 4, 5, 6, 7, 8, 9, 10, 11], // April to November
      },
      {
        name: "Broccoli",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cabbage",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Carrot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cucumber",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Gem Squash",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Lettuce",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Onion",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pepper (Sweet)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pumpkin",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Squash (Butternuts)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweetcorn",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Melon",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Watermelons",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
    ],
  },
  {
    name: "South",
    crops: [
      {
        name: "Beetroot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8], // January to September
        harvesting: [2, 3, 4, 5, 6, 7, 8, 9, 10], // March to November
      },
      {
        name: "Broccoli",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cabbage",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Carrot",
        planting: [1, 2, 3, 4, 5, 6, 7, 8], // February to September
        harvesting: [3, 4, 5, 6, 7, 8, 9, 10, 11], // April to November
      },
      {
        name: "Cucumber",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Gem Squash",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Lettuce",
        planting: [0, 1, 2, 3], // January to April
        harvesting: [5, 6, 7, 8], // June to September
      },
      {
        name: "Onion",
        planting: [4, 5], // May/June
        harvesting: [9, 10, 11], // October to December
      },
      {
        name: "Pepper (Sweet)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pumpkin",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Squash (Butternuts)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweetcorn",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Melon",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Watermelons",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
    ],
  },
  {
    name: "Zambezi",
    crops: [
      {
        name: "Beetroot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Broccoli",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cabbage",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Carrot",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Cucumber",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Gem Squash",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Lettuce",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Onion",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pepper (Sweet)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Pumpkin",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Squash (Butternuts)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweetcorn",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Melon",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Sweet Potato",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Swiss Chard (Spinach)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Indeterminate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Tomato - Open field (Determinate)",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
      {
        name: "Watermelons",
        planting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
        harvesting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year round
      },
    ],
  },
];