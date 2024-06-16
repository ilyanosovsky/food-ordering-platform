import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useDebounce from "@/hooks/useDebounce";

const formSchema = z.object({
  searchQuery: z.string().min(1, "Restaurant name is required"),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery = "" }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: searchQuery || "",
    },
  });
  const { t } = useTranslation();
  const [query, setQuery] = useState(searchQuery);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    form.reset({ searchQuery: debouncedQuery });
  }, [debouncedQuery, form]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3  ${
          form.formState.errors.searchQuery ? "border-red-500" : ""
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                  placeholder={placeHolder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full"
        >
          {t("search.reset")}
        </Button>
        <Button type="submit" className="rounded-full bg-orange-500">
          {t("search.search")}
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
