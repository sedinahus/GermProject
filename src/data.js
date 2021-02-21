const Lacto = {
    'Lactobacillus spp. or Erysipelothrix spp.': {
        name: 'Lactobacillus spp. or Erysipelothrix spp.',
        children: {
            'H2P Positive': {
                name: 'H2P Positive',
                children: {
                    'Possible Erysipelothrix spp.': {
                        name: 'Possible Erysipelothrix spp.'
                    }
                }
            },
            'H2P Negative': {
                name: 'H2P Negative',
                children: {
                    'Possible Erysipelothrix spp.': {
                        name: 'Possible Lactobacillus spp.'
                    }
                }
            },
        }
    }
}

const data = {
    'Gram (+) rod': {
        name: 'Gram (+) rod',
        children: {
            'Regular shape': {
                name: 'Regular shape',
                children: {
                    'Catalase (+)': {
                       name: 'Catalase (+)',
                       children: {
                           'Colony size': {
                               name: 'Colony size',
                               children: {
                                   'Small non-hemilyric and small Gram (+) rods': {
                                       name: 'Small non-hemilyric and small Gram (+) rods',
                                       children: {
                                           'Corynebacterium spp.': {
                                               name: 'Corynebacterium spp.'
                                           },
                                       }
                                   },
                                   'Small beta-hemolytic, tiny Gram (+ rods)': {
                                       name: 'Small beta-hemolytic, tiny Gram (+ rods)',
                                       children: {
                                           'Listeria spp.': {
                                               name: 'Listeria spp.',
                                           }
                                       }
                                   },
                                   'Large Gram (+) rods and large colony': {
                                       name: 'Large Gram (+) rods and large colony',
                                       children: {
                                           'Bacillus spp.': {
                                               name: 'Bacillus spp.'
                                           }
                                       }
                                   }
                               }
                           }
                       }
                    },
                    'Catalase (-)': {
                       name: 'Catalase (-)',
                       children: {
                           'Small to long sized Gram (+) rods': {
                               name: 'Small to long sized Gram (+) rods',
                               children: {
                                   ...Lacto
                               }
                           }
                       }
                    }
                }
            },
            'Irregular/pleomorphic shape': {
                name: 'Irregular/pleomorphic shape',
                children: {
                    'Catalase (+)': {
                        name: 'Catalase (+)',
                        children: {
                            'Non-motile, non-hemolytic': {
                                name: 'Non-motile, non-hemolytic',
                                children: {
                                    'Corynebacterium spp.': {
                                        name: 'Corynebacterium spp.'
                                    }
                                }
                            }
                        }
                    },
                    'Catalase (-)': {
                        name: 'Catalase (-)',
                        children: {
                            'Non-motile, non-hemolytic': {
                               name: 'Non-motile, non-hemolytic',
                               children: {
                                   ...Lacto
                               } 
                            },
                            'Non-motile, hemolytic': {
                                name: 'Non-motile, hemolytic',
                                children: {
                                    'Gardnerella spp.': {
                                        name: 'Gardnerella spp.'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

export default data;