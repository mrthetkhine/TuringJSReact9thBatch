import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "@/lib/Config";
import Movie from "@/types/movie";

type GetAllMovieApiResponse = Movie[];

export const movieApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL+'/api' }),
    reducerPath: "moviesApi",
    tagTypes: ["Movies"],
    endpoints: (build) => ({

        getAllMovies: build.query<GetAllMovieApiResponse, undefined>({
            query: () => `/movies`,
            providesTags: (result, error, id) => [{ type: "Movies" }],
        }),
        saveMovie:build.mutation<Movie,Movie>({
            query: (movie:Movie) => ({
                url: `movies`,
                method: 'POST',
                body: movie,
            }),
            //Pessimistic update
            async onQueryStarted(movie:Movie , { dispatch, queryFulfilled }) {
                console.log('movie ',movie);
                let patchResult ;
                try {
                    const {data:savedMovie} = await queryFulfilled;
                    patchResult = dispatch(
                        movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                            draft = draft.push(savedMovie);
                            return draft;
                        }),
                    );
                    console.log('Saved Movie ',savedMovie);
                } catch {

                }
            }
            /*  invalidatesTags: [{ type: 'Todos'}],*/
        }),
    }),
});
export const { useGetAllMoviesQuery, useSaveMovieMutation} = movieApiSlice;