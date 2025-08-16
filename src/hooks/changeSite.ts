export const ChangeSite = () => {
    const onClickSite = (site: string) => {
        window.open(site, "_blank", "noopener,noreferrer");
    }

    return {
        onClickSite
    }
}