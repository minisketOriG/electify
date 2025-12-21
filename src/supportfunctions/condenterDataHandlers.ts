    import { reqtype } from "@/interfaces/enums";

    const handleAddContender = (contenderVariables: any,setIsLoading: (isLoading: boolean) => void) => {
        setIsLoading(true)

        const variableSections = [...document.querySelectorAll("#variableSetter")];
        const variableInputs = [...document.querySelectorAll("#variableSetter input")];

        setTimeout(() => {
            const tempDetails: Record<string, string | number | null> = {};
            let noErrors: boolean = true;

            contenderVariables.forEach((variable: any, index: number) => {
                const inputcontainer = variableSections[index] as HTMLDivElement;
                const input = variableInputs[index] as HTMLInputElement;
                const value = input.value.trim() as string | number | null;

                inputcontainer.classList.remove("border-red-500");

                if ((variable.requirement === reqtype.default || variable.requirement === reqtype.required) && !value) {
                    inputcontainer.classList.add("border-red-500");
                    input.focus();
                    setIsLoading(false);
                    noErrors = false;
                    return;
                }

                if (value) {
                    tempDetails[variable.name] = value;
                }
            });


            if (noErrors) {
                setIsLoading(false);
                console.log("Contender Details:", tempDetails);
            }

        }, 2000);
    }


    const handleEditContender = (contenderVariables: any,setIsLoading: (isLoading: boolean) => void) => {
        setIsLoading(true)
    
        const variableSections = [...document.querySelectorAll("#variableSetter")];
        const variableInputs = [...document.querySelectorAll("#variableSetter input")];
    
        setTimeout(() => {
          const tempDetails: Record<string, string | number | null> = {};
          let noErrors: boolean = true;
    
          contenderVariables.forEach((variable: any, index: number) => {
            const inputcontainer = variableSections[index] as HTMLDivElement;
            const input = variableInputs[index] as HTMLInputElement;
            const value = input.value.trim() as string | number | null;
    
            inputcontainer.classList.remove("border-red-500");
    
            if ((variable.requirement === reqtype.default || variable.requirement === reqtype.required) && !value) {
              inputcontainer.classList.add("border-red-500");
              input.focus();
              setIsLoading(false);
              noErrors = false;
              return;
            }
    
            if (value) {
              tempDetails[variable.name] = value;
            }
          });
    
    
          if (noErrors) {
            setIsLoading(false);
            console.log("Contender Details:", tempDetails);
          }
    
        }, 2000);
      }
    

    export { handleAddContender,handleEditContender }