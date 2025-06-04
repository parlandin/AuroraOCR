export const imageLinkToBlobLink = async (
  imageUrl: string
): Promise<string | null> => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
    return null;
  }
};
