import { useState } from "react";
import Button from "../../atoms/Button";
import InputBuilder from "../../atoms/Form";
import { cn } from "../../../lib/utils";

export default function FilterInput({ className }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div
      className={cn("flex items-center gap-5 flex-col xl:flex-row", className)}
    >
      <InputBuilder
        className="w-full xl:w-[60%]"
        icon={{
          icon: "material-symbols:search",
        }}
        type="text"
        options={{
          placeholder: "Cari di sini",
          value: search,
          onInput: (e) => setSearch(e.target.value),
        }}
      />
      <div className="w-full xl:w-[40%] flex gap-4 items-center">
        <InputBuilder
          className="w-full flex-1"
          icon={{
            icon: "fluent:location-28-regular",
          }}
          type="text"
          options={{
            placeholder: "Lokasi",
            value: location,
            onInput: (e) => setLocation(e.target.value),
          }}
        />
        <Button>Cari</Button>
      </div>
    </div>
  );
}
