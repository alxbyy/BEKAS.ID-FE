import { useState } from "react";
import Button from "../../component/atoms/Button";
import Card from "../../component/atoms/Card";
import Container from "../../component/atoms/Container";
import Dropdown from "../../component/atoms/Dropdown";
import InputBuilder from "../../component/atoms/Form";
import CategoryCarousel from "../../component/molecules/CategoryCarousel";
import FilterInput from "../../component/molecules/FilterInput";
import {
  REGEX_NUMBER,
  categoryMenu,
  conditionMenu,
  dataCard,
  dealMenu,
  sizeMenu,
  sortMenu,
} from "../../helper/data";
import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import { thousandSeparator } from "../../helper/function";
import _ from "lodash";

const DEFAULT_CAT = [
  {
    id: "all",
    img: "",
    title: "Semua Kategori",
  },
  ...categoryMenu,
];

function ListPage() {
  // list card
  const [list, setList] = useState(_.orderBy(dataCard, ["created_at"], ["asc"]));

  // filter by category
  const [listCat, setListCat] = useState(DEFAULT_CAT);
  const [searchCat, setSearchCat] = useState("");
  const [selectedCat, setSelectedCat] = useState(DEFAULT_CAT[0]);

  const filterCat = (cat) => {
    if (cat.id === "all") {
      setList(dataCard);

      return;
    }

    setList(dataCard.filter((item) => item.category.includes(cat.id)));
  };

  const searchFilterCat = (value) => {
    if (!searchCat) {
      setListCat(DEFAULT_CAT);

      return;
    }

    setListCat(
      DEFAULT_CAT.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // sort by
  const [selectedSort, setSelectedSort] = useState(sortMenu[0]);

  // filter by size
  const [selectedSize, setSelectedSize] = useState([]);
  const filterSize = (options) => {
    if (options.length === 0) {
      setList(dataCard);

      return;
    }

    setList(dataCard.filter((item) => options.includes(item.size)));
  };

  // filter by condition
  const [selectedCondition, setSelectedCondition] = useState([]);
  const filterCondition = (options) => {
    if (options.length === 0) {
      setList(dataCard);

      return;
    }

    setList(dataCard.filter((item) => options.includes(item.condition)));
  };

  // filter by prize
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");

  const filterPrice = () => {
    if (!minimumPrice && !maximumPrice) {
      setList(dataCard);

      return;
    }

    setList(
      dataCard.filter((item) => {
        if (minimumPrice && maximumPrice) {
          const isMinimumValid = item.price >= minimumPrice;
          const isMaximumValid = item.price <= maximumPrice;

          return isMinimumValid && isMaximumValid;
        } else if (minimumPrice) {
          return item.price >= minimumPrice;
        } else if (maximumPrice) {
          return item.price <= maximumPrice;
        }

        return false;
      })
    );
  };

  // filter by deal
  const [selectedDeal, setSelectedDeal] = useState([]);

  const filterDeal = (options) => {
    if (options.length === 0) {
      setList(dataCard);

      return;
    }

    setList(
      dataCard.filter((item) => {
        const dealOption = item.deal_option.filter((item) =>
          options.includes(item)
        );

        console.log(dealOption);
        return dealOption.length > 0;
      })
    );
  };

  // style
  const filterSortTrigger =
    "rounded-full border border-gray-800 px-4 py-2 flex items-center gap-2 cursor-pointer";

  return (
    <Container className="pt-[100px]">
      <FilterInput className="mb-[32px]" />
      <div>
        <p className="text-sm mb-3">Women’s Fashion</p>
        <h2 className="text-xl font-bold mb-5">
          100,000+ listings in Women’s Fashion
        </h2>
        <CategoryCarousel />
      </div>
      <div className="flex gap-2 mt-[60px] mb-4 flex-wrap flex-col lg:flex-row">
        <div className="flex gap-2 flex-wrap">
          <Dropdown
            id="filter-category"
            option={{
              customLabel: (
                <div className={filterSortTrigger}>
                  {selectedCat.title}
                  <Icon icon="tabler:chevron-down" width={15} height={15} />
                </div>
              ),
              type: "custom",
            }}
            holdMenuOpen
          >
            <div className="p-4">
              <InputBuilder
                className="w-[400px] mb-3"
                type="text"
                icon={{
                  icon: "material-symbols:search",
                }}
                options={{
                  placeholder: "Nama Kategori",
                  value: searchCat,
                  onInput: (e) => {
                    searchFilterCat(e.target.value);
                    setSearchCat(e.target.value);
                  },
                }}
              />
              {listCat.map((item, index) => (
                <div
                  key={`cat-search-${index}`}
                  className={cn(
                    "cursor-pointer p-2 hover:bg-gray-300 duration-150 border-b last:border-b-0 text-gray-500"
                  )}
                  onClick={() => {
                    filterCat(item);
                    setSelectedCat(item);
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </Dropdown>
          <Dropdown
            id="sort"
            option={{
              customLabel: (
                <div className={filterSortTrigger}>
                  <span className="text-gray-300">Sort</span>
                  {selectedSort.title}
                  <Icon icon="tabler:chevron-down" width={15} height={15} />
                </div>
              ),
              type: "custom",
            }}
            holdMenuOpen
          >
            <div className="p-4 min-w-[250px]">
              {sortMenu.map((item, index) => (
                <div
                  key={`sort-${index}`}
                  className="flex items-center mb-4 last:mb-0"
                >
                  <input
                    id={`sort-${index}`}
                    type="radio"
                    checked={item.id === selectedSort.id}
                    onChange={() => {
                      setSelectedSort(item);

                      const list = item.sort(dataCard);

                      setList(list);
                    }}
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`sort-${index}`}
                    className="ms-2 text-gray-500"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </Dropdown>
        </div>
        <div className="hidden lg:block h-[42px] border-l border-gray-400" />
        <div className="flex gap-2 flex-wrap">
          <Dropdown
            id="size"
            option={{
              customLabel: (
                <div className={filterSortTrigger}>
                  Size
                  <Icon icon="tabler:chevron-down" width={15} height={15} />
                </div>
              ),
              type: "custom",
            }}
            holdMenuOpen
          >
            <div className="p-4 min-w-[260px]">
              {sizeMenu.map((item, index) => (
                <div
                  key={`size-${index}`}
                  className="flex items-center mb-4 last:mb-0"
                >
                  <input
                    id={`size-${index}`}
                    type="checkbox"
                    onChange={() => {
                      const options = selectedSize.includes(item.id)
                        ? selectedSize.filter((id) => id !== item.id)
                        : [...selectedSize, item.id];

                      setSelectedSize(options);
                      filterSize(options);
                    }}
                    checked={selectedSize.includes(item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`size-${index}`}
                    className="ms-2 text-gray-500"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </Dropdown>
          <Dropdown
            id="condition"
            option={{
              customLabel: (
                <div className={filterSortTrigger}>
                  Condition
                  <Icon icon="tabler:chevron-down" width={15} height={15} />
                </div>
              ),
              type: "custom",
            }}
            holdMenuOpen
          >
            <div className="p-4 min-w-[170px]">
              {conditionMenu.map((item, index) => (
                <div
                  key={`condition-${index}`}
                  className="flex items-center mb-4 last:mb-0"
                >
                  <input
                    id={`size-${index}`}
                    type="checkbox"
                    onChange={() => {
                      const options = selectedCondition.includes(item.id)
                        ? selectedCondition.filter((id) => id !== item.id)
                        : [...selectedCondition, item.id];

                      setSelectedCondition(options);
                      filterCondition(options);
                    }}
                    checked={selectedCondition.includes(item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`size-${index}`}
                    className="ms-2 text-gray-500"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </Dropdown>
          <Dropdown
            id="price"
            option={{
              customLabel: (
                <div className={filterSortTrigger}>
                  Price
                  <Icon icon="tabler:chevron-down" width={15} height={15} />
                </div>
              ),
              type: "custom",
            }}
            holdMenuOpen
          >
            <div className="p-4 min-w-[400px]">
              <div className="flex items-center gap-2">
                <InputBuilder
                  className="flex-1"
                  type="text"
                  options={{
                    placeholder: "Rp Minimum",
                    value: minimumPrice ? thousandSeparator(minimumPrice) : "",
                    onInput: (e) => {
                      const regex = REGEX_NUMBER;
                      const value = e.target.value.replace(",", "");

                      if (value && !regex.test(value)) return;

                      setMinimumPrice(thousandSeparator(value, true));
                    },
                  }}
                />
                <div className="w-[10px] border-b-[2px] border-gray-400" />
                <InputBuilder
                  className="flex-1"
                  type="text"
                  options={{
                    placeholder: "Rp Maximum",
                    value: maximumPrice ? thousandSeparator(maximumPrice) : "",
                    onInput: (e) => {
                      const regex = REGEX_NUMBER;
                      const value = e.target.value.replace(",", "");

                      if (value && !regex.test(value)) return;

                      setMaximumPrice(thousandSeparator(value, true));
                    },
                  }}
                />
              </div>
              <div className="flex justify-end gap-2 mt-5">
                <Button
                  variant="primary-outlined"
                  onClick={() => {
                    filterPrice();
                    setMinimumPrice("");
                    setMaximumPrice("");
                  }}
                >
                  Batal
                </Button>
                <Button onClick={filterPrice}>Pilih</Button>
              </div>
            </div>
          </Dropdown>
          <Dropdown
            id="deal"
            option={{
              customLabel: (
                <div className={filterSortTrigger}>
                  Deal Option
                  <Icon icon="tabler:chevron-down" width={15} height={15} />
                </div>
              ),
              type: "custom",
            }}
            holdMenuOpen
          >
            <div className="p-4 min-w-[170px]">
              {dealMenu.map((item, index) => (
                <div
                  key={`deal-${index}`}
                  className="flex items-center mb-4 last:mb-0"
                >
                  <input
                    id={`size-${index}`}
                    type="checkbox"
                    onChange={() => {
                      const options = selectedDeal.includes(item.id)
                        ? selectedDeal.filter((id) => id !== item.id)
                        : [...selectedDeal, item.id];

                      setSelectedDeal(options);
                      filterDeal(options);
                    }}
                    checked={selectedDeal.includes(item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`size-${index}`}
                    className="ms-2 text-gray-500"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </Dropdown>
        </div>
        <div className="hidden lg:block h-[42px] border-l border-gray-400" />
        <div className="flex gap-2 flex-wrap">
          <div className={filterSortTrigger}>
            More Filter
            <Icon icon="mdi:filter-outline" width={15} height={15} />
          </div>
        </div>
      </div>
      <div className="p-5 border-t md:border md:rounded">
        {list.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10">
            {list.map((item, id) => (
              <Card key={`item-${id}`} data={item} />
            ))}
          </div>
        ) : (
          <div className="h-[50vh] flex items-center justify-center text-gray-400">
            Data tidak ditemukan
          </div>
        )}

        <div className="flex justify-center mt-[32px]">
          <Button variant="primary-outlined">
            Tampilkan Lebih Banyak Hasil
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ListPage;
