import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  );

  return favoritePokemons;
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
  return (
    <div class="grid-cols-2 grid sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => (
          <FavoritePokemonCard pokemon={pokemon}></FavoritePokemonCard>
        )}
      </For>
    </div>
  );
};
