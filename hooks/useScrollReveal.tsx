"use client";
import { useEffect } from "react";

export const useScrollRevealServices = () => {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      ScrollReveal.default().reveal(".row-1", {
        delay: 400,
        duration: 2000,
        distance: "50px",
        origin: "right",
      });

      ScrollReveal.default().reveal(".row-2", {
        delay: 400,
        duration: 2000,
        distance: "50px",
        origin: "left",
      });
    });
  }, []);
};

export const useScrollRevealShop = () => {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      ScrollReveal.default().reveal(".shop-section", {
        delay: 400,
        duration: 1000,
        distance: "50px",
        origin: "bottom",
      });
    });
  }, []);
};

export const useScrollRevealFooter = () => {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      ScrollReveal.default().reveal(".footer-section", {
        delay: 400,
        duration: 1200,
        distance: "50px",
        origin: "bottom",
      });
    });
  }, []);
};

export const useScrollRevealAbout = () => {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      ScrollReveal.default().reveal(".about-left", {
        delay: 400,
        duration: 1200,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal.default().reveal(".about-right", {
        delay: 400,
        duration: 1200,
        distance: "50px",
        origin: "bottom",
      });
    });
  }, []);
};

export const useScrollRevealContact = () => {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      ScrollReveal.default().reveal(".contact-container", {
        delay: 400,
        duration: 1200,
        distance: "50px",
        origin: "bottom",
      });
    });
  }, []);
};
