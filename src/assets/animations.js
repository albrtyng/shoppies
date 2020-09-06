export const movieItem = {
  hide: {
    x: 1000, opacity: 0,
    transition: { duration: 1 }
  },
  show: {
    x: 0, opacity: 1, scale: 1,
    transition: { ease: 'easeInOut', duration: 1 }
  }
}

export const movieList = {
  hide: {
    opacity: 0,
    scale: 0.1,
    transition: {
      duration: 0.7
    }
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 1
    }
  }
}

export const staggerMovies = {
  hide: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.2
    }
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
}
