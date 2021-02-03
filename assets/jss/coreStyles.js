import Colours from "../strings/colours";

const extraSmallFont = {
    fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (3000 - 300)))"
}

const smallFont = {
    fontSize: "calc(16px + (24 - 10) * ((100vw - 300px) / (3000 - 300)))"
}

const largeFont = {
    fontSize: "calc(36px + (56 - 36) * ((100vw - 300px) / (3000 - 300)))"
}

const parallaxHeaderText = {
    ...largeFont,
    fontWeight: "700",
    color: Colours.white,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
}

const parallaxSubHeaderText = {
    ...extraSmallFont,
    fontWeight: "350",
    color: Colours.white,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
}

const sectionHeight = {
    minHeight: "55vh"
}

const greenHrThick = {
    borderTop: "7px solid " + Colours.secondary,
    marginLeft: "10%",
    marginRight: "10%",
}

export {
    extraSmallFont,
    smallFont,
    largeFont,

    parallaxHeaderText,
    parallaxSubHeaderText,

    sectionHeight,

    greenHrThick,
}
