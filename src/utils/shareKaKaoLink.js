import Example from "../assets/images/cat-image.svg";
const KEY = "96bc864a1c79ba707c25c6a956295bda";

export const shareKakaoLink = (url) => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(KEY);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `롤링 페이퍼 `,
        description: `지금 바로 편지를 보내보세요`,
        imageUrl: Example,
        link: {
          webUrl: "https://e-an.netlify.app/",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            webUrl: "http://localhost:5173/textlist",
          },
        },
      ],
    });
  }
};
