export default function formatMessage(message) {
    // Regex to match triple backticks followed by any language name and newline
    const regex = /\`\`\`[a-zA-Z]+\n/g;
  
    // Get all matches for the regex in the message
    const matches = [...message.matchAll(regex)];
    const parts = [];
  
    // If there are no matches, return the entire message as a single part
    if (matches.length === 0) {
      return [{ type: "message", content: message }];
    }
  
    let lastIndex = 0;
  
    // Loop through each match
    for (let i = 0; i < matches.length; i++) {
      let match = matches[i];
  
      // Slice the message up to the current match index
      let slicedMessage = message.slice(lastIndex, match.index);
      lastIndex = match.index;
  
      // Find the last occurrence of the backticks and newline pattern in the sliced message
      let precedingBacktickIndex = slicedMessage.lastIndexOf("\n```\n");
  
      // If no preceding backticks are found, treat the sliced message as a regular message part
      if (precedingBacktickIndex === -1 && slicedMessage.length > 0) {
        parts.push({ type: "message", content: slicedMessage });
      } else {
        // Match the language name from the current slice
        let match = slicedMessage.match(regex);
        // Clean the language name by removing the backticks and newline
        let language = match[0].replace(/```|\n/g, "");
  
        // Extract the code block including the opening backticks
        let codeBlock = slicedMessage.slice(0, precedingBacktickIndex + 4);
        parts.push({ type: "code", content: codeBlock, language: language });
  
        // Extract the message block that follows the code block
        let messageBlock = slicedMessage.slice(precedingBacktickIndex + 4);
        if (messageBlock.length > 0) {
          parts.push({ type: "message", content: messageBlock });
        }
      }
    }
  
    // Process any remaining part of the message after the last match
    let slicedMessage = message.slice(lastIndex);
    let match = slicedMessage.match(regex);
  
    if (match) {
      // Find the last occurrence of the backticks and newline pattern in the remaining message
      let precedingBacktickIndex = slicedMessage.lastIndexOf("\n```\n");
      // Clean the language name by removing the backticks and newline
      let language = match[0].replace(/```|\n/g, "");
  
      // Extract the code block including the opening backticks
      let codeBlock = slicedMessage.slice(0, precedingBacktickIndex + 4);
      parts.push({ type: "code", content: codeBlock, language: language });
  
      // Extract the message block that follows the code block
      let messageBlock = slicedMessage.slice(precedingBacktickIndex + 4);
      if (messageBlock.length > 0) {
        parts.push({ type: "message", content: messageBlock });
      }
    } else {
      // If no match is found in the remaining message, add it as a regular message part
      if (slicedMessage.length > 0) {
        parts.push({ type: "message", content: slicedMessage });
      }
    }
  
    return parts;
  }
  