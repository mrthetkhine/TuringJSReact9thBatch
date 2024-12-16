import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "@/lib/Config";
import Movie from "@/types/movie";
import {RootState} from "@/lib/store";

type GetAllMovieApiResponse = Movie[];

export const movieApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL+'/api',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const state = (getState() as RootState);
            console.log('prepareHeaders State ', state);
            if(state.auth.token)
            {
                headers.set('Authorization', 'Bearer '+state.auth.token);
            }
            return headers;

        }
    }),
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
                            draft.push(savedMovie);
                            console.log('Draft ',draft);
                            //return draft;
                        }),
                    );
                    console.log('Saved Movie ',savedMovie);
                } catch(err) {
                    console.log('Err ',err);
                }
            }

        }),
        updateMovie:build.mutation<Movie,Movie>({
            query: (movie:Movie) => ({
                url: `movies/${movie._id}`,
                method: 'PUT',
                body:movie,
            }),
            async onQueryStarted(movie:Movie , { dispatch, queryFulfilled }) {
                console.log('Movie ',movie);
                const patchResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        //console.log('Draft ',draft);
                        draft = draft.map(item=>item._id == movie._id?movie:item);
                        //console.log('Draft ',draft);
                        return draft;
                    }),
                );
                try {
                    const {data:updateMovie} = await queryFulfilled
                    console.log('updated movie ',updateMovie);
                } catch(err) {
                    patchResult.undo();
                }
            },

        }),
        deleteMovie:build.mutation<Movie,Movie>({
            query: (movie:Movie) => ({
                url: `movies/${movie._id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(movie:Movie , { dispatch, queryFulfilled }) {
                console.log('Movie ',movie);
                const patchResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        //console.log('Draft ',draft);
                        draft = draft.filter(item=>item._id != movie._id);
                        //console.log('Draft ',draft);
                        return draft;
                    }),
                );
                try {
                    const {data:deletedMovie} = await queryFulfilled
                    console.log('delete movie ',deletedMovie);
                } catch(err) {
                    patchResult.undo();
                }
            },

        }),
    }),
});
export const { useGetAllMoviesQuery, useSaveMovieMutation,useUpdateMovieMutation,useDeleteMovieMutation} = movieApiSlice;