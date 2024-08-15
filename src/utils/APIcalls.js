const fetchAvatarImage = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data["message"];
  } catch (error) {
    return "https://images.unsplash.com/photo-1469297677538-c7312a64dbe8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
};

export default fetchAvatarImage;