

    const handleImagePicker = (imagePickerRef : React.RefObject<HTMLInputElement | null> ) => {
        imagePickerRef.current?.click()
    }

    const handleImageChange = (imagePickerRef: React.RefObject<HTMLInputElement | null>,
        imageHolderRef: React.RefObject<HTMLImageElement | null>, setIsLoadingPic: (isLoadingPic: boolean) => void) => {
        const file = imagePickerRef.current?.files?.[0];
        setIsLoadingPic(true)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imgElement = imageHolderRef.current;
                if (imgElement) {
                    imgElement.src = reader.result as string;
                    setIsLoadingPic(false)
                }
            };
            reader.readAsDataURL(file);
        }
    }

    export { handleImagePicker , handleImageChange }