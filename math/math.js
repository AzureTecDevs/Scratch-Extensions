class StrExtension {
  getInfo() {
    return {
      id: 'strext',
      name: 'More Blocks',
      blocks: [
        {
          opcode: 'exactlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] exactly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'A'
            }
          }
        },
        {
          opcode: 'log',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Log [TEXT] to console',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello World!'
            }
          }
        }
      ]
    };
  }

  exactlyEquals(args) {
    return args.ONE === args.TWO;
  }
  //log(args) {
  //  console.log(args.ONE)
  //}
}
}
Scratch.extensions.register(new StrExtension());
