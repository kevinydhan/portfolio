import { LinkFragment } from '$typings'

export interface ProjectRoleFragment {
  name: string
}

export interface ProjectTechnologyFragment {
  id: string
  name: string
}

export interface ProjectImageFragment {
  id: string
  description: string
  localFile: {
    childImageSharp: {
      fluid: {
        src: string
        srcSet: string
        srcWebp: string
        srcSetWebp: string
        sizes: string
        width: number
        height: number
      }
    }
    internal: {
      mediaType: string
    }
  }
}

export interface ProjectFragment {
  id: string

  /**
   * References the project name.
   */
  name: string

  /**
   * References the short summary for the project.
   */
  description: string

  /**
   * References whether the project was an individual or team project.
   */
  type: string

  /**
   * @format `YYYY-MM-DDTHH:mm:ss.SSSZ`
   *
   * References the first Git commit submitted to production for the project.
   */
  startDate: string

  /**
   * @format `MMM YYYY`
   */
  startDateText: string

  /**
   * @format `YYYY-MM-DDTHH:mm:ss.SSSZ`
   *
   * References the last Git commit submitted to production for the project.
   * This value is `null` if the project is still being actively worked on.
   */
  endDate: string | null

  /**
   * @format `MMM YYYY`
   */
  endDateText: string | null

  /**
   * Defines the list of roles/job positions for the project.
   */
  roles: ProjectRoleFragment[]

  /**
   * Defines a list of technologies used for the project.
   */
  technologies: ProjectTechnologyFragment[]

  /**
   * Defines a list of links associated with the project.
   */
  links: LinkFragment[]

  /**
   * Defines a list of images showcasing the project.
   */
  images: ProjectImageFragment[]
}
