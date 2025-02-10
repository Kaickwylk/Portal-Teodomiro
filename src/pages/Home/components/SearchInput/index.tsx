import { useState, useEffect } from "react";
import { SearchFormContainer, StyledInput, Title } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string().optional(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

// No componente SearchInput
interface InputSearchProps {
    postsLength: number;
    fetchPosts: (query?: string) => void;
    numberOfPostsText: string;
    filterType: "all" | "images" | "videos" | "about" | "posts" | "graduation" | "photos" | "clips" | "direcao"; // Adicione "direcao" aqui
  }

// Componente SearchInput
export function SearchInput({
  postsLength,
  fetchPosts,
  numberOfPostsText,
  filterType, // Adicione esta linha
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
      fetchPosts(query); // Passa a query atual
  }, [query, fetchPosts]);

  async function handleSearchPosts(data: SearchFormInput) {
      fetchPosts(data.query); // Passa a query atual
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
              placeholder="Buscar"
              {...register("query")}
              disabled={isSubmitting}
          />
      </SearchFormContainer>
  );
}