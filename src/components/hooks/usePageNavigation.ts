import { useRouter } from "next/router";

export const usePageNavigation = () => {
    const route = useRouter();
    //Top画面に遷移
    const onClickTop = () => {
        route.push("/Top");
    }

    //プロフィール画面に遷移
    const onClickMyProfile = () => {
        route.push("/MyProfileScreen")
    }

    //成果物一覧に遷移
    const onClickProductList = () => {
        route.push("/ProductListScreen");
    }

    //資格一覧画面に遷移
    const onClickQualifications = () => {
        route.push("/QualificationsScreen")
    }

    return{
        onClickTop,
        onClickMyProfile,
        onClickProductList,
        onClickQualifications
    }
}