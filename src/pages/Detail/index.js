import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom";
import Container from "../../component/atoms/Container";
import FilterInput from "../../component/molecules/FilterInput";
import { useEffect, useState } from "react";
import { REGEX_NUMBER, dataCard } from "../../helper/data";
import { Icon } from "@iconify/react";
import Carousel from "../../component/atoms/Carousel";
import { thousandSeparator } from "../../helper/function";
import dayjs from "dayjs";
import Card from "../../component/atoms/Card";
import Button from "../../component/atoms/Button";
import InputBuilder from "../../component/atoms/Form";

function DetailPage() {
  const [data, setData] = useState(null);
  const [offer, setOffer] = useState("");
  const { id } = useParams();
  const history = useHistory();

  // check is has data
  useEffect(() => {
    const data = dataCard.filter((item) => item.id === id);

    if (data.length === 0) {
      history.push("/list");
    } else {
      setData(data[0]);
    }
  }, [history, id]);

  if (data)
    return (
      <Container className="pt-[100px]">
        <FilterInput className="mb-[32px]" />
        <div className="flex items-center gap-2 mb-5">
          <p>Electronics</p>
          <Icon icon="tabler:chevron-right" width={15} height={15} />
          <p>Computers</p>
          <Icon icon="tabler:chevron-right" width={15} height={15} />
          <p>Laptops</p>
        </div>
        <Carousel className="rounded-[30px]" classNameContainer="-mx-3">
          <div className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-3">
            <img
              className="aspect-[5/4] object-cover w-full"
              src="/images/detail/detail1.png"
              alt="detail"
            />
          </div>
          <div className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-3">
            <img
              className="aspect-[5/4] object-cover w-full"
              src="/images/detail/detail2.png"
              alt="detail"
            />
          </div>
          <div className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-3">
            <img
              className="aspect-[5/4] object-cover w-full"
              src="/images/detail/detail3.png"
              alt="detail"
            />
          </div>
          <div className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-3">
            <img
              className="aspect-[5/4] object-cover w-full"
              src="/images/detail/detail1.png"
              alt="detail"
            />
          </div>
          <div className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-3">
            <img
              className="aspect-[5/4] object-cover w-full"
              src="/images/detail/detail2.png"
              alt="detail"
            />
          </div>
          <div className="flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.3333%] px-3">
            <img
              className="aspect-[5/4] object-cover w-full"
              src="/images/detail/detail3.png"
              alt="detail"
            />
          </div>
        </Carousel>
        <div className="flex flex-col xl:flex-row gap-10 mt-10">
          <div className="flex-1">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-2xl">{data.title}</h1>
              <h2 className="text-4xl font-normal">
                Rp {thousandSeparator(data.price)}
              </h2>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols-light:ad-group-outline-rounded"
                    width={25}
                    height={25}
                  />
                  Lighly used
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="carbon:partnership" width={25} height={25} />
                  Meetup
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:place-outline" width={25} height={25} />
                  Seven Eleven Bendungan Hilir
                </div>
              </div>
              <div className="border-b border-gray-400" />
            </div>
            <div className="flex flex-col gap-[16px] mt-[32px]">
              <h1 className="text-2xl">Description</h1>
              <div className="flex gap-10">
                <div>
                  <p className="text-[12px]">Posted</p>
                  <p>{dayjs(data.created_at).format("DD MMMM YYYY")}</p>
                </div>
                <div>
                  <p className="text-[12px]">Brand</p>
                  <p>Lenovo</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                a erat maximus, placerat ipsum lobortis, pulvinar odio. Ut
                vestibulum ipsum molestie lectus rutrum, sed imperdiet purus
                vulputate. Phasellus vel consectetur sapien, vel rhoncus magna.
                Morbi enim lacus, elementum nec dapibus ac, ultricies a nisl. Ut
                eget viverra enim. Sed a maximus arcu. Pellentesque sed accumsan
                odio. Pellentesque vehicula, purus at malesuada euismod, augue
                sapien ultricies sapien, sit amet sagittis risus mi eu turpis.
                Pellentesque vel porttitor nulla, quis congue libero.
                Pellentesque sed tortor tempus, posuere quam non, efficitur ex.
                Vestibulum placerat eleifend mauris, eget consequat orci
                ullamcorper in. Nulla imperdiet sapien nec nunc interdum, vel
                mattis arcu volutpat. Integer at arcu libero. Vestibulum ex sem,
                mattis a ex id, accumsan tempor ante. Quisque et nisl imperdiet,
                bibendum ligula finibus, blandit dui. Quisque luctus gravida
                felis id tristique. Nulla non ante at diam molestie scelerisque
                in eget augue. Quisque dictum augue mi, in tristique ipsum
                pharetra a. Sed gravida justo et magna rhoncus, consectetur
                imperdiet felis rutrum. Maecenas porta arcu id risus tincidunt
                vestibulum. Morbi risus sapien, pharetra et est fringilla,
                pellentesque commodo justo. Morbi euismod posuere ullamcorper.
                Phasellus euismod urna id nibh scelerisque, a posuere odio
                congue. Cras sodales scelerisque massa, elementum eleifend justo
                eleifend at. Morbi a dui leo. Phasellus a ex tellus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque tellus
                massa, efficitur quis nibh a, gravida cursus quam. Sed porta
                elit nisl, sed mattis magna egestas vel. Duis sit amet felis
                dui. Donec iaculis neque vel felis interdum, id fermentum arcu
                pretium. Donec ac ultrices est. Proin vel quam neque. Sed porta
                erat vel metus tempus, vel aliquam dui tempus. Cras sit amet
                purus purus. Vestibulum fermentum dolor ac ante porttitor, id
                vestibulum nulla tempor. Nullam non odio vel magna molestie
                eleifend et non diam. In nec orci eu erat rutrum finibus vitae
                vitae lorem. Nam in elementum orci. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Morbi ultricies lorem est, non accumsan ante feugiat
                non. In efficitur nunc a metus elementum imperdiet. Curabitur
                aliquet convallis neque, non mattis urna lacinia eu.
                Pellentesque a justo non velit interdum hendrerit eu vitae
                turpis. Nulla mollis nunc eu pharetra lobortis. In et purus at
                est commodo vulputate. Vestibulum id commodo mauris, sit amet
                interdum metus. Fusce pulvinar eu massa nec placerat. Praesent
                tincidunt ex nunc, at scelerisque ligula cursus ut. Phasellus
                gravida malesuada nulla. Phasellus lobortis, ante vel
                scelerisque molestie, quam ligula eleifend felis, et mollis dui
                velit ac lectus. Curabitur tristique convallis facilisis.
                Suspendisse ex diam, tincidunt eget aliquam sit amet, elementum
                quis velit. Duis vitae felis interdum, eleifend ipsum vitae,
                dictum lacus. Donec quis accumsan turpis. Nullam venenatis eros
                vitae arcu gravida, et lobortis eros dictum. Ut nec eros id
                massa laoreet malesuada. Sed mattis quam nec justo eleifend
                mollis. Aenean tempus risus at ligula vulputate, ac porta orci
                malesuada. Suspendisse in imperdiet lectus. Morbi non metus in
                lorem blandit vehicula quis non odio. Nam in mollis nisi, sed
                vulputate risus. Phasellus commodo sapien vitae lacus hendrerit,
                eu convallis ipsum viverra. Sed est eros, euismod a massa ac,
                placerat tincidunt nisi. Nunc lorem libero, tristique quis
                malesuada ut, tempus et mi. Ut sed nulla sed felis consequat
                sagittis.
              </p>
            </div>
            <div className="flex flex-col gap-[16px] mt-[32px]">
              <h1 className="text-2xl">Meet-up</h1>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:place-outline" width={25} height={25} />
                Seven Eleven Bendungan Hilir
                <Icon
                  icon="majesticons:open"
                  width={15}
                  height={15}
                  color="#C0C0C0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[16px] mt-[32px]">
              <div className="flex items-center gap-10">
                <h1 className="text-2xl whitespace-nowrap">Meet the seller</h1>
                <div className="w-full h-[1px] bg-gray-400" />
              </div>
              <div className="flex items-center gap-[20px]">
                <img
                  className="w-[100px] aspect-square"
                  src={data.user.img}
                  alt={`avatar ${data.user.name}`}
                />
                <div className="text-sm flex flex-col gap-2">
                  <p>{data.user.name}</p>
                  <p className="flex items-center gap-1">
                    <Icon icon="mdi:place-outline" width={15} height={15} />
                    Joined 6 years ago
                  </p>
                  <p className="flex items-center gap-1">
                    <Icon
                      icon="fluent:chat-multiple-16-filled"
                      width={15}
                      height={15}
                    />
                    Very Responsive
                  </p>
                  <p className="flex items-center gap-1">
                    <Icon icon="ic:baseline-facebook" width={15} height={15} />
                    <Icon icon="ic:round-email" width={15} height={15} />
                    Verified
                  </p>
                </div>
                <div className="hidden xl:flex flex-col gap-3">
                  <p>Belum ada ulasan untuk @lapaklaptop</p>
                  <p className="text-[12px]">
                    Ulasan diberikan saat pembeli atau penjual menyelesaikan
                    transaksi. Ngobrol dengan @lapaklaptop untuk mengetahui
                    lebih lanjut!
                  </p>
                  <Link
                    className="text-blue-400 flex items-center gap-2"
                    to="/"
                  >
                    Lihat Profil
                    <Icon icon="tabler:chevron-right" width={25} height={25} />
                  </Link>
                </div>
              </div>
              <div className="flex xl:hidden flex-col gap-3">
                <p>Belum ada ulasan untuk @lapaklaptop</p>
                <p className="text-[12px]">
                  Ulasan diberikan saat pembeli atau penjual menyelesaikan
                  transaksi. Ngobrol dengan @lapaklaptop untuk mengetahui lebih
                  lanjut!
                </p>
                <Link className="text-blue-400 flex items-center gap-2" to="/">
                  Lihat Profil
                  <Icon icon="tabler:chevron-right" width={25} height={25} />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[332px]">
            <div className="p-5 border rounded">
              <div className="flex items-center gap-3">
                <img
                  className="w-[40px] aspect-square"
                  src={data.user.img}
                  alt={`avatar ${data.user.name}`}
                />
                <div>
                  <p>{data.user.name}</p>
                  <p>Belum ada ulasan</p>
                </div>
              </div>
              <Button className="w-full mt-5">Diskusi dan Chat</Button>
            </div>
            <div className="p-5 border rounded mt-8">
              <p className="text-blue-600 text-center mb-3">
                Masuk untuk membuat penawaran
              </p>
              <InputBuilder
                className="flex-1"
                type="text"
                options={{
                  placeholder: "Rp 100,000",
                  value: offer ? thousandSeparator(offer) : "",
                  onInput: (e) => {
                    const regex = REGEX_NUMBER;
                    const value = e.target.value.replace(",", "");

                    if (value && !regex.test(value)) return;

                    setOffer(thousandSeparator(value, true));
                  },
                }}
              />
              <Button className="w-full mt-5">
                <Icon icon="ic:round-plus" width={15} height={15} />
                Buat Penawaran
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] mt-[32px]">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl whitespace-nowrap">Similiar Listing</h1>
            <div className="w-full h-[1px] bg-gray-400" />
          </div>
          <div className="p-5 border-t md:border md:rounded">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10">
              {dataCard.map((item, id) => (
                <Card key={`item-${id}`} data={item} />
              ))}
            </div>

            <div className="flex justify-center mt-[32px]">
              <Button variant="primary-outlined">
                Lihat Lainnya
                <Icon icon="formkit:arrowright" width={15} height={15} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
}

export default DetailPage;
