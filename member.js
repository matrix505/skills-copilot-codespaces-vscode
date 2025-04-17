function skillsMember() {
  return {
    name: 'skills',
    description: 'Skills member',
    type: 'member',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the skill',
      },
      level: {
        type: 'string',
        description: 'Level of the skill',
      },
    },
  };
}