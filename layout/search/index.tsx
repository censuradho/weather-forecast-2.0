import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, ButtonIcon, Container, Input, Typography } from 'components'
import { MainLayout } from 'layout/main'
import * as Styles from './styles'
import { searchSchemaValidation } from './validations'
import { SearchFormData } from './types'

export function SearchLayout () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchemaValidation)
  })

  const onSubmit = async (data: SearchFormData) => {

  }

  return (
    <MainLayout>
      <Container>
        <Styles.Wrapper>
          <Box flexDirection="column" gap={2}>
            <Box alignItems="center" gap={0.5}>
              <ButtonIcon
                icon={{ name: 'arrowLeft' }}
              />
              <Typography color="white">Add cidade</Typography>
            </Box>
            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors.city?.message}
                register={register('city')}
                leftIcon={{
                  name: 'search',
                  size: 25
                }}
              />
            </Styles.Form>
          </Box>
        </Styles.Wrapper>
      </Container>
    </MainLayout>
  )
}
