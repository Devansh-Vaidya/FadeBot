export default function formatMessage(message) {
  // Regex to match ``` followed by any language name and \n
  const regex = /```[a-zA-Z]+\n/g;
  let matches = [...message.matchAll(regex)];
  let parts = [];
  if (matches.length === 0) {
    return [{type: "message", content: message}];
  }
  matches.forEach((match, index) => {
    let slicedMessage = message.slice(0, match.index);
    if (slicedMessage.lastIndexOf("\n```\n") === -1) {
      parts.push({type: "message", content: slicedMessage});
    } else {
      let codeBlock = slicedMessage.slice(0, slicedMessage.lastIndexOf("```") + 3);
      let messageBlock = slicedMessage.slice(slicedMessage.lastIndexOf("```") + 3);
      parts.push({type: "code", content: codeBlock});
      parts.push({type: "message", content: messageBlock});
    }
    message = message.slice(match.index);
  });

  if (message.length > 0) {
    if (message.lastIndexOf("\n```\n") === -1) {
      parts.push({type: "message", content: message});
    } else {
      let codeBlock = message.slice(0, message.lastIndexOf("```") + 3);
      let messageBlock = message.slice(message.lastIndexOf("```") + 3);
      parts.push({type: "code", content: codeBlock});
      parts.push({type: "message", content: messageBlock});
    }
  }
  return parts;
}
