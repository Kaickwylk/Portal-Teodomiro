import { useEffect } from "react";
import { SearchFormContainer, StyledInput, Title } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string().optional(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface InputSearchProps {
  postsLength: number;
  numberOfPostsText: string;
  fetchPosts: (query?: string) => void;
}

export function SearchInput({
  postsLength,
  fetchPosts,
  numberOfPostsText,
}: InputSearchProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const query = watch("query"); // Monitora o valor do campo de pesquisa

  // Atualiza a lista de posts sempre que a query é limpa
  useEffect(() => {
    if (!query) {
      fetchPosts(); // Exibe todos os posts quando o campo está vazio
    }
  }, [query, fetchPosts]);

  async function handleSearchPosts(data: SearchFormInput) {
    fetchPosts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <Title>
        <h3>Publicações</h3>
        <span>
          {postsLength} {numberOfPostsText}
        </span>
      </Title>

      <StyledInput
        type="text"
        placeholder="Buscar por título"
        {...register("query")}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  );
}
