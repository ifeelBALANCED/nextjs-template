import { ChangeEventHandler } from 'react'
import { useQueryClient } from 'react-query'
import { createUpdateArticleMutationVariables } from '@/factories/create-update-article-mutation-variables'
import { ArticlesQuery, useUpdateArticleMutation } from '@/generated/graphql'
import { useEffectedState } from '@/hooks/use-effected-state'

export const useArticleItemBindings = (
  article: ArticlesQuery['articles'][0]
) => {
  const queryClient = useQueryClient()
  const updateArticleMutation = useUpdateArticleMutation({
    onSuccess: (data) => {
      const previousArticles = queryClient.getQueryData<ArticlesQuery>([
        'GetArticles',
      ])
      if (!previousArticles) return

      queryClient.setQueryData(['GetArticles'], {
        ...previousArticles,
        articles: previousArticles.articles.map((article) =>
          article.id === data.update_articles_by_pk?.id
            ? data.update_articles_by_pk
            : article
        ),
      })
    },
  })

  const [title, setTitle] = useEffectedState(article.title)
  const [content, setContent] = useEffectedState(article.content)

  const titleBindings: {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    onBlur: ChangeEventHandler<HTMLTextAreaElement>
  } = {
    onChange: (e) => {
      setTitle(e.target.value)
    },
    onBlur: () => {
      if (article.title === title) return
      updateArticleMutation.mutate(
        createUpdateArticleMutationVariables({
          ...article,
          title,
        })
      )
    },
  }

  const contentBindings: {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    onBlur: ChangeEventHandler<HTMLTextAreaElement>
  } = {
    onChange: (e) => {
      setContent(e.target.value)
    },
    onBlur: () => {
      if (article.content === content) return
      updateArticleMutation.mutate(
        createUpdateArticleMutationVariables({
          ...article,
          content,
        })
      )
    },
  }

  return {
    title,
    titleBindings,
    content,
    contentBindings,
  }
}
