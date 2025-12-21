

export interface PageHeaderProps{
    type: string;
}

export interface HeaderButtonProps{
    text: string;
    icon: React.ReactNode;
    link?: string;
    action?: boolean
}

export interface AuthButtonProps{
    type: string;
    disabled: boolean;
    setIsDisabled: (disabled: boolean) => void;
}

export interface NavigationButtonProps{
    type: string;
    icon: React.ReactNode;
    title: string;
    link: string;
}

export interface NavigationPanelProps{
    type: string;
}

export interface SignUpIntroProps{
    setIsIntro: (isIntro: boolean) => void;
    setIsVerify: (isVerify: boolean) => void;
}

export interface SignUpVerifyProps{
    setIsVerify: (isVerify: boolean) => void;
    setIsVerifyConfirmed: (isVerifyConfirmed: boolean) => void;
    setIsVerifySuccess: (isVerifySuccess: boolean) => void;
}

export interface SignUpVerifyConfirmedProps{
    isVerifySuccess: boolean;
    setIsVerifyConfirmed: (isVerifyConfirmed: boolean) => void;
    setIsVerifySuccess: (isVerifySuccess: boolean) => void;
    setCredentials: (isCredentials: boolean) => void;
}

export interface SignUpCredentialsProps{
    setCredentials: (isCredentials: boolean) => void;
    setAccountCreated: (isAccountCreated: boolean) => void;
}

export interface SignInIntroProps{
    setIsIntro: (isIntro: boolean) => void;
    setIsSuccessful: (isVerify: boolean) => void;
}

export interface RevenueStatCardProps{
    title: string;
    amount: number;
}

export interface EventStatCardProps{
    title: string;
    amount: number;
}

export interface EventCardProps{
    eventType: string;
    eventTiming: boolean;
}

export interface EventColorPanelProps{
    selectedFlagColor: number;
    setSelectedFlagColor: (selectedFlagColor: number) => void;
}

export interface EventCostProps{
    setShowEventCost: (showEventCost: boolean) => void;
}

export interface AddVariableProps{
    setIsShowVariableAdd: (isShowVariableAdd: boolean) => void;
}

export interface EditVariableProps{
    variableId: number;
    setIsShowVariableEdit: (isShowVariableEdit: boolean) => void;
}