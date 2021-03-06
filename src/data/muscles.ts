interface Muscle {
  name: string;
  is_front: boolean;
  image_url_main: string;
  image_url_secondary: string;
}

interface MuscleData {
  [id: number]: Muscle;
}

const data: MuscleData = {
  1: {
    name: "Biceps brachii",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-1.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-1.svg",
  },
  2: {
    name: "Anterior deltoid",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-2.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-2.svg",
  },
  11: {
    name: "Biceps femoris",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-11.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-11.svg",
  },
  13: {
    name: "Brachialis",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-13.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-13.svg",
  },
  7: {
    name: "Gastrocnemius",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-7.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-7.svg",
  },
  8: {
    name: "Gluteus maximus",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-8.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-8.svg",
  },
  12: {
    name: "Latissimus dorsi",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-12.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-12.svg",
  },
  14: {
    name: "Obliquus externus abdominis",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-14.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-14.svg",
  },
  4: {
    name: "Pectoralis major",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-4.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-4.svg",
  },
  10: {
    name: "Quadriceps femoris",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-10.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-10.svg",
  },
  6: {
    name: "Rectus abdominis",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-6.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-6.svg",
  },
  3: {
    name: "Serratus anterior",
    is_front: true,
    image_url_main: "/static/images/muscles/main/muscle-3.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-3.svg",
  },
  15: {
    name: "Soleus",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-15.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-15.svg",
  },
  9: {
    name: "Trapezius",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-9.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-9.svg",
  },
  5: {
    name: "Triceps brachii",
    is_front: false,
    image_url_main: "/static/images/muscles/main/muscle-5.svg",
    image_url_secondary: "/static/images/muscles/secondary/muscle-5.svg",
  },
};

export default data;
