import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Subjects() {
    const list = [
        {
            title: "Mathematics",
<<<<<<< HEAD
            img: "/img/mathematics.png",
        },
        {
            title: "Science",
            img: "/img/science.png",
        },
        {
            title: "English",
            img: "/img/english.png",
        },
        {
            title: "History",
            img: "/img/history.png",
        },
        {
            title: "ICT",
            img: "/img/ict.png",
        },
        {
            title: "Sinhala",
            img: "/img/sinhala.png",
        },
        {
            title: "Commerce",
            img: "/img/commerce.png",
        },
        {
            title: "Music",
            img: "/img/music.png",
=======
            img: "/img/Subjects/mathematics.jpg",
        },
        {
            title: "Science",
            img: "/img/Subjects/science.jpg",
        },
        {
            title: "English",
            img: "/img/Subjects/english.jpg",
        },
        {
            title: "History",
            img: "/img/Subjects/history.jpg",
        },
        {
            title: "ICT",
            img: "/img/Subjects/ict.jpg",
        },
        {
            title: "Sinhala",
            img: "/img/Subjects/sinhala.jpg",
        },
        {
            title: "Commerce",
            img: "/img/Subjects/commerce.jpg",
        },
        {
            title: "Music",
            img: "/img/Subjects/arts.jpg",
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
        },
    ];

    return (
        <div className="mt-1">
            <div>
                <h1 className="text-4xl text-black font-sans font-bold left-0 relative inline-block">
                    Subjects
                    <span
                        className="absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200"
                        style={{
                            width: "30%",
                        }}
                    ></span>
                </h1>
            </div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-14 mt-8">
                {list.map((item, index) => (
                    /* eslint-disable no-console */
                    <Card className="bg-white bg-opacity-40" key={index} isPressable shadow="sm"
                          onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                radius="lg"
                                shadow="sm"
                                src={item.img}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="text-small text-black justify-between xw">
                            <b>{item.title}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
